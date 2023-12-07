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
export type GiMineWagonProps = typeof __propDef.props;
export type GiMineWagonEvents = typeof __propDef.events;
export type GiMineWagonSlots = typeof __propDef.slots;
export default class GiMineWagon extends SvelteComponentTyped<GiMineWagonProps, GiMineWagonEvents, GiMineWagonSlots> {
}
export {};
