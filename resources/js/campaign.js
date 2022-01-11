

/***************************************************************************************************

                                     EFFECT NETWORK Function

****************************************************************************************************/


// Initiate Client 
const client = new effectsdk.EffectClient('jungle');

// Instantiating bsc account.
const account = effectsdk.createAccount('0x3d658ba29fe6d3742b607c306a81a48c954060ac2a22cae83679b94482002687');

// Generate web3 instance from account.
const web3 = effectsdk.createWallet(account);

// Function to create campaign object 
var createCampaign = async function() { 

    // Connect your account to the Effect Client.
    const effectAccount  = await client.connectAccount(web3);

    // Create Campain object 
    const campaignToIpfs = {

        // The title of the campaign
        title: $("#title").val(),
        
        // Description of the campaign
        description: $("#description").val(),   

        // Instructions
        instructions: 'Identify all the happy tree friends!',  

        // Campaign image
        image: 'https://ipfs.effect.ai/ipfs/bafkreiggnttdaxleeii6cdt23i4e24pfcvzyrndf5kzfbqgf3fxjryj5s4',  

        // The category of the campaign
        category: 'Effect Voice',   

        // Example task that will prefill the task template
        example_task: {
            'content': 'Honestly Effect network is so powerful and easy to learn. Highly, highly recommend to any developer who like blockchain development and wanted to contribute to society. This is my first time develop blockchain app and I managed to build my own template within 1 day with zero blockchain knowledge. It is fun and i really love it!'
        },

        // Version of the campaign
        version: 1,  

        // Amount of EFX to reward for completinga task
        reward: $("#reward").val(),

         // The template that will be used for the tasks
        template: templateContent

    }

    // Publish campaign
    const makeCampaign =  client.force.makeCampaign(campaignToIpfs, $("#reward").val())

    // Update batches
    const content = {
        'tasks': [
            {"content": "https://ipfs.effect.ai/ipfs/bafkreiggnttdaxleeii6cdt23i4e24pfcvzyrndf5kzfbqgf3fxjryj5s4"}, 
            {"content": "https://ipfs.effect.ai/ipfs/bafkreidrxwhqsxa22uyjamz7qq3lh7pv2eg3ykodju6n7cgprmjpal2oga"}, 
            {"content": "https://ipfs.effect.ai/ipfs/bafkreid2ocabg7mo235uuwactlcf7vzxyagoxeroyrubfufwobtqz3q27q"}, 
            {"content": "https://ipfs.effect.ai/ipfs/bafkreifu5xciyxpwnmkorzddanqtc66i43q5cn4sdkb3l563yjzd7s3274"}
        ]
    }
        
    // Retrieve the campaign that was last created & create batch 
    const campaign = await client.force.getMyLastCampaign()
    await client.force.createBatch(campaign.id, content, 1)

    // Response 
    swal('Campaign Created','' ,'success');

}

// On create campaign
$("#create").click(function(){
    createCampaign();    
})

