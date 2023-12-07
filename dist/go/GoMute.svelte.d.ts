import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GoMuteProps = typeof __propDef.props;
export type GoMuteEvents = typeof __propDef.events;
export type GoMuteSlots = typeof __propDef.slots;
export default class GoMute extends SvelteComponentTyped<GoMuteProps, GoMuteEvents, GoMuteSlots> {
}
export {};
