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
export type GiSparkSpiritProps = typeof __propDef.props;
export type GiSparkSpiritEvents = typeof __propDef.events;
export type GiSparkSpiritSlots = typeof __propDef.slots;
export default class GiSparkSpirit extends SvelteComponentTyped<GiSparkSpiritProps, GiSparkSpiritEvents, GiSparkSpiritSlots> {
}
export {};
