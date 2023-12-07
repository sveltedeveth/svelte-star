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
export type GiJigsawBoxProps = typeof __propDef.props;
export type GiJigsawBoxEvents = typeof __propDef.events;
export type GiJigsawBoxSlots = typeof __propDef.slots;
export default class GiJigsawBox extends SvelteComponentTyped<GiJigsawBoxProps, GiJigsawBoxEvents, GiJigsawBoxSlots> {
}
export {};
