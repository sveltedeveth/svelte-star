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
export type MdCropSquareProps = typeof __propDef.props;
export type MdCropSquareEvents = typeof __propDef.events;
export type MdCropSquareSlots = typeof __propDef.slots;
export default class MdCropSquare extends SvelteComponentTyped<MdCropSquareProps, MdCropSquareEvents, MdCropSquareSlots> {
}
export {};
