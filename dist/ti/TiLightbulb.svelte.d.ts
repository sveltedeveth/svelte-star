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
export type TiLightbulbProps = typeof __propDef.props;
export type TiLightbulbEvents = typeof __propDef.events;
export type TiLightbulbSlots = typeof __propDef.slots;
export default class TiLightbulb extends SvelteComponentTyped<TiLightbulbProps, TiLightbulbEvents, TiLightbulbSlots> {
}
export {};
