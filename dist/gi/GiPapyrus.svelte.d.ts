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
export type GiPapyrusProps = typeof __propDef.props;
export type GiPapyrusEvents = typeof __propDef.events;
export type GiPapyrusSlots = typeof __propDef.slots;
export default class GiPapyrus extends SvelteComponentTyped<GiPapyrusProps, GiPapyrusEvents, GiPapyrusSlots> {
}
export {};
