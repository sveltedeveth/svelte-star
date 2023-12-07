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
export type GiSpearsProps = typeof __propDef.props;
export type GiSpearsEvents = typeof __propDef.events;
export type GiSpearsSlots = typeof __propDef.slots;
export default class GiSpears extends SvelteComponentTyped<GiSpearsProps, GiSpearsEvents, GiSpearsSlots> {
}
export {};
