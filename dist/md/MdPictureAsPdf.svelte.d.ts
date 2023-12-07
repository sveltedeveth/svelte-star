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
export type MdPictureAsPdfProps = typeof __propDef.props;
export type MdPictureAsPdfEvents = typeof __propDef.events;
export type MdPictureAsPdfSlots = typeof __propDef.slots;
export default class MdPictureAsPdf extends SvelteComponentTyped<MdPictureAsPdfProps, MdPictureAsPdfEvents, MdPictureAsPdfSlots> {
}
export {};
