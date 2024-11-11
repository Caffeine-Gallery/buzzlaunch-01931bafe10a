export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getCurrentTime' : IDL.Func([], [IDL.Int], ['query']),
    'getTargetDate' : IDL.Func([], [IDL.Int], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
