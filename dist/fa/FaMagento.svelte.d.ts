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
export type FaMagentoProps = typeof __propDef.props;
export type FaMagentoEvents = typeof __propDef.events;
export type FaMagentoSlots = typeof __propDef.slots;
export default class FaMagento extends SvelteComponentTyped<FaMagentoProps, FaMagentoEvents, FaMagentoSlots> {
}
export {};
