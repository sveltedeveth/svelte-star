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
export type FaStickerMuleProps = typeof __propDef.props;
export type FaStickerMuleEvents = typeof __propDef.events;
export type FaStickerMuleSlots = typeof __propDef.slots;
export default class FaStickerMule extends SvelteComponentTyped<FaStickerMuleProps, FaStickerMuleEvents, FaStickerMuleSlots> {
}
export {};
