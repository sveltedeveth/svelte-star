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
export type FaRegLightbulbProps = typeof __propDef.props;
export type FaRegLightbulbEvents = typeof __propDef.events;
export type FaRegLightbulbSlots = typeof __propDef.slots;
export default class FaRegLightbulb extends SvelteComponentTyped<FaRegLightbulbProps, FaRegLightbulbEvents, FaRegLightbulbSlots> {
}
export {};
