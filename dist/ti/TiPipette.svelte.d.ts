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
export type TiPipetteProps = typeof __propDef.props;
export type TiPipetteEvents = typeof __propDef.events;
export type TiPipetteSlots = typeof __propDef.slots;
export default class TiPipette extends SvelteComponentTyped<TiPipetteProps, TiPipetteEvents, TiPipetteSlots> {
}
export {};
