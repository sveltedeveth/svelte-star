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
export type FaGlassWhiskeyProps = typeof __propDef.props;
export type FaGlassWhiskeyEvents = typeof __propDef.events;
export type FaGlassWhiskeySlots = typeof __propDef.slots;
export default class FaGlassWhiskey extends SvelteComponentTyped<FaGlassWhiskeyProps, FaGlassWhiskeyEvents, FaGlassWhiskeySlots> {
}
export {};
