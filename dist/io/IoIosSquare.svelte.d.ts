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
export type IoIosSquareProps = typeof __propDef.props;
export type IoIosSquareEvents = typeof __propDef.events;
export type IoIosSquareSlots = typeof __propDef.slots;
export default class IoIosSquare extends SvelteComponentTyped<IoIosSquareProps, IoIosSquareEvents, IoIosSquareSlots> {
}
export {};
