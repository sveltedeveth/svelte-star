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
export type MdWbSunnyProps = typeof __propDef.props;
export type MdWbSunnyEvents = typeof __propDef.events;
export type MdWbSunnySlots = typeof __propDef.slots;
export default class MdWbSunny extends SvelteComponentTyped<MdWbSunnyProps, MdWbSunnyEvents, MdWbSunnySlots> {
}
export {};
