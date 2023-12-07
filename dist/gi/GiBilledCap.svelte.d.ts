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
export type GiBilledCapProps = typeof __propDef.props;
export type GiBilledCapEvents = typeof __propDef.events;
export type GiBilledCapSlots = typeof __propDef.slots;
export default class GiBilledCap extends SvelteComponentTyped<GiBilledCapProps, GiBilledCapEvents, GiBilledCapSlots> {
}
export {};
