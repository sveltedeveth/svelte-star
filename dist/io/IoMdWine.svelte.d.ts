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
export type IoMdWineProps = typeof __propDef.props;
export type IoMdWineEvents = typeof __propDef.events;
export type IoMdWineSlots = typeof __propDef.slots;
export default class IoMdWine extends SvelteComponentTyped<IoMdWineProps, IoMdWineEvents, IoMdWineSlots> {
}
export {};
