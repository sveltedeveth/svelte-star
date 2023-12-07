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
export type GoScreenNormalProps = typeof __propDef.props;
export type GoScreenNormalEvents = typeof __propDef.events;
export type GoScreenNormalSlots = typeof __propDef.slots;
export default class GoScreenNormal extends SvelteComponentTyped<GoScreenNormalProps, GoScreenNormalEvents, GoScreenNormalSlots> {
}
export {};
