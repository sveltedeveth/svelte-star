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
export type FaAccessibleIconProps = typeof __propDef.props;
export type FaAccessibleIconEvents = typeof __propDef.events;
export type FaAccessibleIconSlots = typeof __propDef.slots;
export default class FaAccessibleIcon extends SvelteComponentTyped<FaAccessibleIconProps, FaAccessibleIconEvents, FaAccessibleIconSlots> {
}
export {};
