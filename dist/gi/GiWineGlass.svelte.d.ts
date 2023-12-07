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
export type GiWineGlassProps = typeof __propDef.props;
export type GiWineGlassEvents = typeof __propDef.events;
export type GiWineGlassSlots = typeof __propDef.slots;
export default class GiWineGlass extends SvelteComponentTyped<GiWineGlassProps, GiWineGlassEvents, GiWineGlassSlots> {
}
export {};
