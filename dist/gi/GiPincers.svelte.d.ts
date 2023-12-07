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
export type GiPincersProps = typeof __propDef.props;
export type GiPincersEvents = typeof __propDef.events;
export type GiPincersSlots = typeof __propDef.slots;
export default class GiPincers extends SvelteComponentTyped<GiPincersProps, GiPincersEvents, GiPincersSlots> {
}
export {};
