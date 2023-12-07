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
export type FaFirstAidProps = typeof __propDef.props;
export type FaFirstAidEvents = typeof __propDef.events;
export type FaFirstAidSlots = typeof __propDef.slots;
export default class FaFirstAid extends SvelteComponentTyped<FaFirstAidProps, FaFirstAidEvents, FaFirstAidSlots> {
}
export {};
