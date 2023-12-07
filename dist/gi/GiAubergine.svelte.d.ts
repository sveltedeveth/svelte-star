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
export type GiAubergineProps = typeof __propDef.props;
export type GiAubergineEvents = typeof __propDef.events;
export type GiAubergineSlots = typeof __propDef.slots;
export default class GiAubergine extends SvelteComponentTyped<GiAubergineProps, GiAubergineEvents, GiAubergineSlots> {
}
export {};
