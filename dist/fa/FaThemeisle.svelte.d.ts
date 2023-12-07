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
export type FaThemeisleProps = typeof __propDef.props;
export type FaThemeisleEvents = typeof __propDef.events;
export type FaThemeisleSlots = typeof __propDef.slots;
export default class FaThemeisle extends SvelteComponentTyped<FaThemeisleProps, FaThemeisleEvents, FaThemeisleSlots> {
}
export {};
