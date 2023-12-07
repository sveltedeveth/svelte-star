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
export type GiCricketBatProps = typeof __propDef.props;
export type GiCricketBatEvents = typeof __propDef.events;
export type GiCricketBatSlots = typeof __propDef.slots;
export default class GiCricketBat extends SvelteComponentTyped<GiCricketBatProps, GiCricketBatEvents, GiCricketBatSlots> {
}
export {};
