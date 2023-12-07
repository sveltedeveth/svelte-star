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
export type FaWineGlassProps = typeof __propDef.props;
export type FaWineGlassEvents = typeof __propDef.events;
export type FaWineGlassSlots = typeof __propDef.slots;
export default class FaWineGlass extends SvelteComponentTyped<FaWineGlassProps, FaWineGlassEvents, FaWineGlassSlots> {
}
export {};
