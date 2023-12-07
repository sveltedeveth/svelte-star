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
export type GiBatBladeProps = typeof __propDef.props;
export type GiBatBladeEvents = typeof __propDef.events;
export type GiBatBladeSlots = typeof __propDef.slots;
export default class GiBatBlade extends SvelteComponentTyped<GiBatBladeProps, GiBatBladeEvents, GiBatBladeSlots> {
}
export {};
