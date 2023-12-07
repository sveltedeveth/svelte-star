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
export type FaLightbulbProps = typeof __propDef.props;
export type FaLightbulbEvents = typeof __propDef.events;
export type FaLightbulbSlots = typeof __propDef.slots;
export default class FaLightbulb extends SvelteComponentTyped<FaLightbulbProps, FaLightbulbEvents, FaLightbulbSlots> {
}
export {};
