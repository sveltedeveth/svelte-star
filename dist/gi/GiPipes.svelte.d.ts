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
export type GiPipesProps = typeof __propDef.props;
export type GiPipesEvents = typeof __propDef.events;
export type GiPipesSlots = typeof __propDef.slots;
export default class GiPipes extends SvelteComponentTyped<GiPipesProps, GiPipesEvents, GiPipesSlots> {
}
export {};
