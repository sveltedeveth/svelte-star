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
export type GiBoarTusksProps = typeof __propDef.props;
export type GiBoarTusksEvents = typeof __propDef.events;
export type GiBoarTusksSlots = typeof __propDef.slots;
export default class GiBoarTusks extends SvelteComponentTyped<GiBoarTusksProps, GiBoarTusksEvents, GiBoarTusksSlots> {
}
export {};
