module.exports = {
  mySidebar: [
    'index',
    'introduction',
    'what_is_rsj',
    'rsj_reports',
    'sma_defaults',
    {
      type: 'category',
      label: 'RSJ Sub-Types',
      collapsed: true,
      items: [
        'subtype_rsj',
        'answer_prompts',
        'find_report_from_rsj',
        'find_batch_output_seq_num',
        'find_report_from_episys_report',
        'ftp_all_reports_in_list',       
      ],
    },
    {
      type: 'category',
      label: 'RSJ Utilities',
      collapsed: true,
      items: [
        'backup_and_prune',
        'find_prompts',
        'force_log_off',
        'restart_point',
      ],
    },
    {
      type: 'category',
      label: 'References',
      collapsed: true,
      items: [
        'subtype_rsj_startimage',
        'answer_prompts_startimage',
        'find_report_from_rsj_startimage',
        'find_batch_output_seq_num_startimage',
        'find_report_from_episys_report_startimage',
        'ftp_all_reports_in_list_startimage', 
      ],
    },
  
  ],
};
