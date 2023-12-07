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
export type DiEmberProps = typeof __propDef.props;
export type DiEmberEvents = typeof __propDef.events;
export type DiEmberSlots = typeof __propDef.slots;
export default class DiEmber extends SvelteComponentTyped<DiEmberProps, DiEmberEvents, DiEmberSlots> {
}
export {};
