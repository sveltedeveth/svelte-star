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
export type GoTextSizeProps = typeof __propDef.props;
export type GoTextSizeEvents = typeof __propDef.events;
export type GoTextSizeSlots = typeof __propDef.slots;
export default class GoTextSize extends SvelteComponentTyped<GoTextSizeProps, GoTextSizeEvents, GoTextSizeSlots> {
}
export {};
