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
export type GiCircleCageProps = typeof __propDef.props;
export type GiCircleCageEvents = typeof __propDef.events;
export type GiCircleCageSlots = typeof __propDef.slots;
export default class GiCircleCage extends SvelteComponentTyped<GiCircleCageProps, GiCircleCageEvents, GiCircleCageSlots> {
}
export {};
