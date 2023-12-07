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
export type GiHoodedFigureProps = typeof __propDef.props;
export type GiHoodedFigureEvents = typeof __propDef.events;
export type GiHoodedFigureSlots = typeof __propDef.slots;
export default class GiHoodedFigure extends SvelteComponentTyped<GiHoodedFigureProps, GiHoodedFigureEvents, GiHoodedFigureSlots> {
}
export {};
