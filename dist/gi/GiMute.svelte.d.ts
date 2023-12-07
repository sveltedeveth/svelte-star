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
export type GiMuteProps = typeof __propDef.props;
export type GiMuteEvents = typeof __propDef.events;
export type GiMuteSlots = typeof __propDef.slots;
export default class GiMute extends SvelteComponentTyped<GiMuteProps, GiMuteEvents, GiMuteSlots> {
}
export {};
