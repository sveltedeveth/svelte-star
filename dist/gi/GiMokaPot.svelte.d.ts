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
export type GiMokaPotProps = typeof __propDef.props;
export type GiMokaPotEvents = typeof __propDef.events;
export type GiMokaPotSlots = typeof __propDef.slots;
export default class GiMokaPot extends SvelteComponentTyped<GiMokaPotProps, GiMokaPotEvents, GiMokaPotSlots> {
}
export {};
