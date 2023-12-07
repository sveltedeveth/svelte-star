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
export type GiHatchetsProps = typeof __propDef.props;
export type GiHatchetsEvents = typeof __propDef.events;
export type GiHatchetsSlots = typeof __propDef.slots;
export default class GiHatchets extends SvelteComponentTyped<GiHatchetsProps, GiHatchetsEvents, GiHatchetsSlots> {
}
export {};
