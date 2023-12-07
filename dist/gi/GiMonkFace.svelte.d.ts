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
export type GiMonkFaceProps = typeof __propDef.props;
export type GiMonkFaceEvents = typeof __propDef.events;
export type GiMonkFaceSlots = typeof __propDef.slots;
export default class GiMonkFace extends SvelteComponentTyped<GiMonkFaceProps, GiMonkFaceEvents, GiMonkFaceSlots> {
}
export {};
