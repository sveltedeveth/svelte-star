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
export type FaFigmaProps = typeof __propDef.props;
export type FaFigmaEvents = typeof __propDef.events;
export type FaFigmaSlots = typeof __propDef.slots;
export default class FaFigma extends SvelteComponentTyped<FaFigmaProps, FaFigmaEvents, FaFigmaSlots> {
}
export {};
