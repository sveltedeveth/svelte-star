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
export type FaParachuteBoxProps = typeof __propDef.props;
export type FaParachuteBoxEvents = typeof __propDef.events;
export type FaParachuteBoxSlots = typeof __propDef.slots;
export default class FaParachuteBox extends SvelteComponentTyped<FaParachuteBoxProps, FaParachuteBoxEvents, FaParachuteBoxSlots> {
}
export {};
