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
export type TiWineProps = typeof __propDef.props;
export type TiWineEvents = typeof __propDef.events;
export type TiWineSlots = typeof __propDef.slots;
export default class TiWine extends SvelteComponentTyped<TiWineProps, TiWineEvents, TiWineSlots> {
}
export {};
