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
export type GiCarpetBombingProps = typeof __propDef.props;
export type GiCarpetBombingEvents = typeof __propDef.events;
export type GiCarpetBombingSlots = typeof __propDef.slots;
export default class GiCarpetBombing extends SvelteComponentTyped<GiCarpetBombingProps, GiCarpetBombingEvents, GiCarpetBombingSlots> {
}
export {};
