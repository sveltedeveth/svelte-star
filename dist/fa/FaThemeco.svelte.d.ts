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
export type FaThemecoProps = typeof __propDef.props;
export type FaThemecoEvents = typeof __propDef.events;
export type FaThemecoSlots = typeof __propDef.slots;
export default class FaThemeco extends SvelteComponentTyped<FaThemecoProps, FaThemecoEvents, FaThemecoSlots> {
}
export {};
