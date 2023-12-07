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
export type GiDwarfHelmetProps = typeof __propDef.props;
export type GiDwarfHelmetEvents = typeof __propDef.events;
export type GiDwarfHelmetSlots = typeof __propDef.slots;
export default class GiDwarfHelmet extends SvelteComponentTyped<GiDwarfHelmetProps, GiDwarfHelmetEvents, GiDwarfHelmetSlots> {
}
export {};
