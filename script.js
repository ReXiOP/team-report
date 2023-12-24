function generateReport() {
    var zikrCount = document.getElementById('zikrCount').value;
    var zikrRegularity = document.getElementById('zikrRegularity').value;

    var pashAnpashCount = document.getElementById('pashAnpashCount').value;
    var pashAnpashRegularity = document.getElementById('pashAnpashRegularity').value;

    var duroodCount = document.getElementById('duroodCount').value;
    var duroodRegularity = document.getElementById('duroodRegularity').value;

    var hourlyZikrCount = document.getElementById('hourlyZikrCount').value;

    var mazlisCount = document.getElementById('mazlisCount').value;

    var sunnatMarketingCount = document.getElementById('sunnatMarketingCount').value;

    var sm40Count = document.getElementById('sm40Count').value;
    var sm40Hours = document.getElementById('sm40Hours').value;

    var teamMembersCount = document.getElementById('teamMembersCount').value;

    var newMembersCount = document.getElementById('newMembersCount').value;

    var communicationMembersCount = document.getElementById('communicationMembersCount').value;

    var meetingAttendanceCount = document.getElementById('meetingAttendanceCount').value;

    var lastWeekAttendanceCount = document.getElementById('lastWeekAttendanceCount').value;

    var teamMeetingStatus = document.getElementById('teamMeetingStatus').value;

    var translationPagesCount = document.getElementById('translationPagesCount').value;

    if (
        !zikrCount || !zikrRegularity ||
        !pashAnpashCount || !pashAnpashRegularity ||
        !duroodCount || !duroodRegularity ||
        !hourlyZikrCount || !mazlisCount ||
        !sunnatMarketingCount || !sm40Count || !sm40Hours ||
        !teamMembersCount || !newMembersCount ||
        !communicationMembersCount || !meetingAttendanceCount ||
        !lastWeekAttendanceCount || !teamMeetingStatus ||
        !translationPagesCount
    ) {
        alert('Please fill in all sections before generating the report.');
        return;
    }

    var reportText = `
        পবিত্র নুরুদ দারাজাত মুবারকে ক্ষমা চেয়ে সাপ্তাহিক রিপোর্ট পেশ করছি:

        বিষয় (৩) : অনুবাদ টিম
        দায়িত্বশীল : মুহম্মদ সাজিদ , নুরুল আমীন । 
    
        🔸যিকির: ${zikrCount} [${zikrRegularity}]
        🔸পাছ-আনপাছ: ${pashAnpashCount} [${pashAnpashRegularity}]
        🔸এশ-ফজর দুরুদ শরীফ: ${duroodCount} [${duroodRegularity}]
        🔸এক ঘন্টা যিকির: ${hourlyZikrCount}
        🔸সাইয়্যিদুল আইয়াদ শরীফ  মজলিসে সংযুক্ত করা: ${mazlisCount}
        🔸সুন্নত মুবারক প্রচার ও বিক্রয়: ${sunnatMarketingCount}
        🔸SM40 তে সময় দেওয়া: ${sm40Count} [${sm40Hours}]
        🔸টিম সদস্য: ${teamMembersCount}
        🔸নতুন সদস্য বৃদ্ধি: ${newMembersCount}
        🔸সদস্য বৃদ্ধিতে যোগাযোগ: ${communicationMembersCount}
        🔸মিটিংয়ে সদস্য উপস্থিত থাকতে বলা: ${meetingAttendanceCount}
        🔸গত সপ্তাহে সদস্য উপস্থিতি: ${lastWeekAttendanceCount}
        🔸টিম মিটিং করা: ${teamMeetingStatus}
        🔸লক্ষ্যমাত্রা অনুযায়ী টিম রিপোর্ট নিম্নরূপ: 
        বেয়াদবি ক্ষমা চাই, এই সপ্তাহে ${translationPagesCount} পৃষ্ঠা অনুবাদ করা হয়েছে।
    `;

    document.getElementById('report').innerText = reportText;
}
