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
export type FaWaveSquareProps = typeof __propDef.props;
export type FaWaveSquareEvents = typeof __propDef.events;
export type FaWaveSquareSlots = typeof __propDef.slots;
export default class FaWaveSquare extends SvelteComponentTyped<FaWaveSquareProps, FaWaveSquareEvents, FaWaveSquareSlots> {
}
export {};
