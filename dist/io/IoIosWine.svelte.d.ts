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
export type IoIosWineProps = typeof __propDef.props;
export type IoIosWineEvents = typeof __propDef.events;
export type IoIosWineSlots = typeof __propDef.slots;
export default class IoIosWine extends SvelteComponentTyped<IoIosWineProps, IoIosWineEvents, IoIosWineSlots> {
}
export {};
