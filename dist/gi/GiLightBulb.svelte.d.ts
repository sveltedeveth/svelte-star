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
export type GiLightBulbProps = typeof __propDef.props;
export type GiLightBulbEvents = typeof __propDef.events;
export type GiLightBulbSlots = typeof __propDef.slots;
export default class GiLightBulb extends SvelteComponentTyped<GiLightBulbProps, GiLightBulbEvents, GiLightBulbSlots> {
}
export {};
