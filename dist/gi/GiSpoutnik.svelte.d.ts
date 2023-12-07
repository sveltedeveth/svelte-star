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
export type GiSpoutnikProps = typeof __propDef.props;
export type GiSpoutnikEvents = typeof __propDef.events;
export type GiSpoutnikSlots = typeof __propDef.slots;
export default class GiSpoutnik extends SvelteComponentTyped<GiSpoutnikProps, GiSpoutnikEvents, GiSpoutnikSlots> {
}
export {};
